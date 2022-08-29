---
layout: datastructure
title: "Recurrsion task"
---

# Program 1

#####  Write a programme that take any nested json as input and gives  output with  datatype of each key as key of that object. below is an example input and output json

Example 1: 

### Input
```
{
    "name": "your name",
    "age": 26,
    "address": {
        "ispermenent": true,
        "city": "surat",
        "state": "Gujarat",
        "contact": [
            {
                "email": "abc@gmai.com",
                "mobile": 1234556664
            },
            {
                "email": "abc@gmai.com",
                "mobile": 1234556664
            }
        ]
    }
}
```

### Output 
```
{
    "name": {
        "type": "string",
        "value": "your name"
    },
    "age": {
        "type": "number",
        "value": 26
    },
    "address": {
        "type": "object",
        "value": {
            "ispermenent": {
                "type": "boolean",
                "value": true
            },
            "city": {
                "type": "string",
                "value": "surat"
            },
            "state": {
                "type": "string",
                "value": "Gujarat"
            },
            "contact": {
                "type": "array",
                "value": [
                    {
                        "type": "object",
                        "value": {
                            "email": {
                                "type": "string",
                                "value": "abc@gmai.com"
                            },
                            "mobile": {
                                "type": "number",
                                "value": 1234556664
                            }
                        }
                    },
                    {
                        "type": "object",
                        "value": {
                            "email": {
                                "type": "string",
                                "value": "abc@gmai.com"
                            },
                            "mobile": {
                                "type": "number",
                                "value": 1234556664
                            }
                        }
                    }
                ]
            }
        }
    }
}
```


# Program 2

##### Write a programme that take any nested json as input and gives  last key and value as output of input json. below is an example input and output json


### Input

```
{
	name:"your name",
	age:26,
	address:{
		ispermenent:true,	
		city:"surat",
		state:"Gujarat",
		nestedObj:{
			leval:{
				levelKey:"value"			
			}
		},
		contact:[{email:"abc@gmai.com",mobile:1234556664}]
	}
}
```

### Output

```
    last key : levelKey   
    last key value : value
```