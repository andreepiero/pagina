jQuery("#simulation")
  .on("click", ".t-a8aec9a1-253f-439c-9ba8-f308737cccb9 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6754f284-5b0c-479f-96c4-e97958f93a7a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".t-a8aec9a1-253f-439c-9ba8-f308737cccb9 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-a8aec9a1-253f-439c-9ba8-f308737cccb9 #t-Button_1": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#4CB9CE",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#4CB9CE",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4CB9CE",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#4CB9CE",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#t-a8aec9a1-253f-439c-9ba8-f308737cccb9 #t-Button_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#t-a8aec9a1-253f-439c-9ba8-f308737cccb9 #t-Button_1 span": {
                      "attributes": {
                        "color": "#4CB9CE",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#t-a8aec9a1-253f-439c-9ba8-f308737cccb9 #t-Button_1": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#4CB9CE",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#4CB9CE",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4CB9CE",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#4CB9CE",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".t-a8aec9a1-253f-439c-9ba8-f308737cccb9 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Button_1")) {
      jEvent.undoCases(jFirer);
    }
  });