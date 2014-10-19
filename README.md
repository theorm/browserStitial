BrowserStitial
==============

Just another Alert  

##Dependencies
  - Crel: https://github.com/KoryNunn/crel

##Usage
  - Include Crel on your project:  
    ```<script src="http://cdnjs.cloudflare.com/ajax/libs/crel/2.1.5/crel.min.js"></script>```

  - Include BrowserStitial on your project:  
    ```<script src="browserstitial.js"></script>```

  - Include data:
    ```
    var error = false;

    var data = {
      "messagetext" : "You%20get%20a%20coupon%20for%20being%20awesome!",
      "messagecontent": "This is a fantastic product! <br /><br /> Go and buy it :-)",
      "appkey": "2afc468a6a7be18564ac8ac74f814308",
      "campaignid": 245,
      "templateid": 18871,
      "splitid": 311,
      "phash": "stgaaazk6P",
      "errorcode": 0,
      "errorinfo": "success"
    }
    ```

  - Init the BrowserStitial:  
    ``` bs = new browserStitial(error, data); ```
  
  This will crete an Alert.

##Commands / Methods Usage  
  - Create a new Alert:  
    ``` bs.createBrowserStitial(false, data) ```

  - Destroy the current Alert:  
    ``` bs.destroyBrowserStitial(); ```
