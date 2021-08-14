[![CircleCI](https://circleci.com/gh/Ghada-1992/cypress-swaglabs/tree/master.svg?style=svg)](https://app.circleci.com/pipelines/github/Ghada-1992/cypress-swaglabs?branch=master)

An e2e testing framework in JavaScript developed using [Cypress](https://github.com/cypress-io/cypress)

### Tests :

The following e2e tests run against a publicly available application :
https://www.saucedemo.com/

#### Login Page Tests : 

* Verify that a locked user cannot login to the system
* Verify User cannot login without a username
* Verify User cannot login without a password
* Verify User can login with correct credentials

#### Home Page Tests :

* Verify User can successfully logout from the application
* Verify that the application redirects to the "About" page

### Instructions :

#### Pre-Requisites :

* Node v10+
* NPM v6+

#### Get Started:
* Clone and install :
    ```
    git clone https://github.com/Ghada-1992/cypress-swaglabs.git
    cd cypress-swaglabs
    ```

* Run Test Locally :
    ```
    npm test
    ```

* View Reports for Local Run :

  After a run completion, [Mochawesome](https://github.com/adamgruber/mochawesome) generates report under `cypress/results/report/mochawesome.html`



* CI/CD :

    - CI is setup using CircleCI Orbs

    - Config for the CI is defined in `circle.yml`.
    - It uses Cypress's predefined Orb which makes installing cypress, caching dependencies, parallel execution etc. with minimum effort and maximum efficiency.

    - View the Builds for this repo @ https://app.circleci.com/pipelines/github/Ghada-1992/cypress-swaglabs?branch=master ( **You need to be logged in to your own CircleCI account using your GitHub credentials to view this** )

    - View Mochawesome Report under `Artifacts` tab of the Job run


![Alt text](images/mochawesome-report.png?raw=true "Report Artifacts")
