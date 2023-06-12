---
layout: interview_practicals
title: "Experience Node Practical"
---

### Overview

* Create a backend app to perform rest API endpoint as mentioned below.
<br>

### Technology Stack

**Database:** JSON files<br>
**Server Side:** Node<br>
**Test Frameworks:** Jest<br>

### Description

* <font size="3">Endpoints</font>

  * PUT /:student-id/:propertyName(/:propertyName)
    * Stores data within /data/${studentId}.json
      * If that file or property doesn't exist it is created.
      * Should also set nested properties: <br>
        curl -X PUT -d '{ "score":98 }' <br>
        http://localhost:8000/rn1abu8/courses/calc/quizzes/ye0ab61 <br>
        **would mean that** <br>
        require('./data/rn1abu8.json').courses.calc.quizzes.ye0ab61.score === 98
  * GET /:student-id/:propertyName(/:propertyName)
    * Retrieves data from /data/${studentId}.json. Returns 404 if that file or property doesn't exist.
    * Should also retrieve nested properties: <br>
      curl http://localhost:8000/rn1abu8/courses/calc
  * DELETE /:student-id/:propertyName(/:propertyName)
    * Removes data from /data/${studentId}.json. Returns 404 if that file or property doesn't exist.
    * Should also remove nested properties.

* <font size="3">Tests</font>

  * Each endpoint should have its own test
