### SharedModule
---
All the “dumb” components and pipes should be implemented here. These components don’t import and inject services from core or other features in their constructors. They should receive all data though attributes in the template of the component using them. This all sums up to the fact that SharedModule doesn’t have any dependency to the rest of our application.

It is also the perfect place to import and re-export Angular Material components.


---
##### Ref: https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81