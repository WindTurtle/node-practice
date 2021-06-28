#### Basically differentiate between:

- Global features: Keywords like const or function but also some global objects like process

- Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")

- Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way

- Global features are always available, you don't need to import them into the files where you want to use them.

- Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.

- Third-party Modules need to be installed (via npm install in the project folder) AND imported.
