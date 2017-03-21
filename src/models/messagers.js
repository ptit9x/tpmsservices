const messagers = {
  "list_number": [
    {
      "sid":"1",
      "phone_number":"+17606215500"
    },
    {
      "sid":"2",
      "phone_number":"+18052284394"
    },
    {
      "sid":"3",
      "phone_number":"+1766880099"
    },
    {
      "sid":"4",
      "phone_number":"+1777889933"
    }
  ],
  "call_log":[
    {
      "sid": "1",
      "to":"+18052284394",
      "from":"+17606215500",
      "date_created": "Fri, 10 Mar 2017 03:04:33 +0000",
      "duration":20
    },
    {
      "sid": "2",
      "to":"+18052284394",
      "from":"+1766880099",
      "date_created": "Fri, 10 Mar 2017 03:05:33 +0000",
      "duration":60
    },
    {
      "sid": "3",
      "to":"+18052284394",
      "from":"+1777889933",
      "date_created": "Fri, 10 Mar 2017 03:06:33 +0000",
      "duration":50
    },
    {
      "sid": "4",
      "to":"+18052284394",
      "from":"+17606215500",
      "date_created": "Fri, 10 Mar 2017 03:07:33 +0000",
      "duration":150
    },
    {
      "sid": "5",
      "to":"+1766880099",
      "from":"+18052284394",
      "date_created": "Fri, 10 Mar 2017 03:08:33 +0000",
      "duration":1000
    }
    ],
  "message": [
    {
      "sid": "1",
      "to":"+18052284394",
      "from":"+17606215500",
      "date_created": "Fri, 10 Mar 2017 03:04:33 +0000",
      "status":"sent",
      "body":"Hello"
    },
    {
      "sid": "2",
      "to":"+17606215500",
      "from":"+18052284394",
      "date_created": "Fri, 10 Mar 2017 03:05:33 +0000",
      "status":"received",
      "body":"Hi. I guess we don't know each other"
    },
    {
      "sid": "3",
      "to":"+18052284394",
      "from":"+17606215500",
      "date_created": "Fri, 10 Mar 2017 03:06:33 +0000",
      "status":"sent",
      "body":"Yes. But I think you are adorable, so I wanna talk with u"
    },
    {
      "sid": "4",
      "to":"+17606215500",
      "from":"+18052284394",
      "date_created": "Fri, 10 Mar 2017 03:07:33 +0000",
      "status":"received",
      "body":"Oh, Srr boy. I'm so sleepy"
    },
    {
      "sid": "6",
      "to":"+1766880099",
      "from":"+17606215500",
      "date_created": "Fri, 10 Mar 2017 03:08:33 +0000",
      "status":"sent",
      "body":"Hangout right now?"
    },
    {
      "sid": "7",
      "to":"+17606215500",
      "from":"+1766880099",
      "date_created": "Fri, 10 Mar 2017 03:09:33 +0000",
      "status":"received",
      "body":"OK"
    }
  ,
    {
      "sid": "8",
      "to":"+1777889933",
      "from":"+1766880099",
      "date_created": "Fri, 10 Mar 2017 03:10:33 +0000",
      "status":"sent",
      "body":"Are your hungry?"
    }
  ,
    {
      "sid": "9",
      "to":"+1766880099",
      "from":"+1777889933",
      "date_created": "Fri, 10 Mar 2017 03:11:33 +0000",
      "status":"received",
      "body":"A little bit"
    }

  ]
};
export default messagers;
