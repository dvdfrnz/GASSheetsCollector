# GAS - Sheet Collector

the purpose of this project is to provide functionality to scrape Google Sheets from a given Drive Hierarchy and **Extract** specific data from them. They can then be **Transformed** and finally **Loaded** into another Google Sheet for further analysis.

Many office activities in comprise manually finding, copying and pasting data from one
place to another. These tasks can easily be automated with ETL functionality provided for the Google Workspace context.

!!! This project is still in its infancy and very much under development.

## Installation

### Step 1: Install Dependencies

Install dependencies and get going

```bash
  # clone the repository
  git clone https://...

  # install packages
  npm install

  # run tests
  npm run tests

  # create docs
  npm run docs
```

### Step 2: Create Clasp File

In order to create your own environment you need to add a ".clasp.json" in your Project directory. From this file Clasp will draw any information necessary for syncing changes to your Drive. Setup your Clasp ".clasp.json" File in your Project Directory and add the followin code:

```json
{
  "scriptId": <Script ID>,
  "rootDir": <Root Directory of your Project>,
  "parentId": [<IDs of Parent Files>]
}
```

## Appendix

Any additional information goes here

---

_Made With:_

![](https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)
![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
