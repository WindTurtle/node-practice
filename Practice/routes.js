const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter User</title></head>");
    res.write('<body style="text-align:center">');
    res.write("<h3>User Management</h3>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="user"><button>Add</button></form>'
    );
    res.write("</h3>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Notification</title></head>");
    res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
    res.write("</html>");
    return res.end();
  }
};

module.exports = requestHandler;
