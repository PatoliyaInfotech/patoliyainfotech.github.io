---
layout: javascript
title: "Controller"
---
###### `Use` [ES6 Class](https://github.com/lukehoban/es6features/blob/master/README.md#classes)
##### `Use` [babel-annotate](https://www.npmjs.com/package/babel-plugin-angularjs-annotate) to do the dependency injection in AngularJS
##### `Avoid` using `$scope` and `$rootScope`

```js
import { ACCESS_TYPE } from 'Common/constants/accessTypes';
import { filter } from 'lodash';

export default class AdviserSelectCtrl {
  constructor(
    utilitiesService,
    generalService,
    corporateService,
    userService
  ) {
    'ngInject';

    this.utilitiesService = utilitiesService;
    this.generalService = generalService;
    this.corporateService = corporateService;
    this.userService = userService;
  }

  $onInit() {
    this.showDropDown = true;
    this.getAdvisersList();

    this.adviserModelBak = { ...this.adviserModel };
  }

  getAdvisersList() {
    this.userService.GetUserInfo()
      .then((response) => {
        if (!response) return;
        const { AccessType, FamilyId } = response.data;

        const dropdownUsers = [ACCESS_TYPE.ADVISER, ACCESS_TYPE.PRINCIPAL_ADVISER, ACCESS_TYPE.ASSISTANT, ACCESS_TYPE.ADMIN_ASSISTANT];
        const isUserShowDropdownAdvisers = dropdownUsers.findIndex(obj => obj === AccessType) !== -1;
        if (isUserShowDropdownAdvisers) {
          this.showDropDown = true;
          this.generalService.getBrokerAll()
            .then((brokers) => {
              const { data } = brokers;
              this.advisersList = data;
            });
        } else {
          this.showDropDown = false;
          this.corporateService.getAdvisersDropdown(FamilyId, 0, 0)
            .then((getAdvisersDropResponse) => {
              if (AccessType === ACCESS_TYPE.CORPORATE) {
                this.advisersList = filter(getAdvisersDropResponse.data, data => data !== '');
              } else {
                this.advisersList = filter(getAdvisersDropResponse.data, data => data.FullName !== '');
              }
            });
        }
      });
  }
}
```
