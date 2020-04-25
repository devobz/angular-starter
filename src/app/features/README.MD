### FeatureModule
---
We are going to create multiple feature modules for every independent feature of our application. Feature modules should only import services from CoreModule. If feature module A needs to import service from feature module B consider moving that service into core.

* In some cases there is a need for services which are shared only by some features and it wouldn’t make much sense to move them into core. In that case we can create special shared feature modules as described later in this post.

---
##### Ref: https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81