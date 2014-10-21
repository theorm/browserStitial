describe('BrowserStitial', function() {

  describe('Check dependencies', function() {

    it('Crel should be loaded', function() {

      expect(typeof crel()).toBe('object');

    });

  });

  describe('Constructor createBrowserStitial', function() {
    var error = null,
        data = {
          "messagetext" : "message text",
          "messagecontent": "message content",
          "appkey": "2afc468a6a7be18564ac8ac74f814308",
          "campaignid": 245,
          "templateid": 18871,
          "splitid": 311,
          "phash": "stgaaazk6P",
          "errorcode": 0,
          "errorinfo": "success"
        },
        bs = new browserStitial(error, data);

    it('Check error value', function() {

      expect(bs.error).toBe(error);

    });

    it('Check data values', function() {

      expect(bs.data).toBe(data);

    });

    it('The BrowserStitial should be defined', function() {
      var bsEl = document.querySelector('#bs-container');

      expect(bsEl).toBeDefined();

    });

  });

  describe('destroyBrowserStitial', function() {

    it('The BrowserStitial should be null', function() {
      var error = false,
          data = {
            "messagetext" : "message text",
            "messagecontent": "message content",
            "appkey": "2afc468a6a7be18564ac8ac74f814308",
            "campaignid": 245,
            "templateid": 18871,
            "splitid": 311,
            "phash": "stgaaazk6P",
            "errorcode": 0,
            "errorinfo": "success"
          },
          bsEl;

      bs = new browserStitial(error, data);

      bs.destroyBrowserStitial();

      bsEl = document.querySelector('#bs-container');

      expect(bsEl).toBeNull();

    });

  });

  describe('Style', function() {

    it('The Style should be applied', function() {
      var error = false,
          data = {
            "messagetext" : "message text",
            "messagecontent": "message content",
            "appkey": "2afc468a6a7be18564ac8ac74f814308",
            "campaignid": 245,
            "templateid": 18871,
            "splitid": 311,
            "phash": "stgaaazk6P",
            "errorcode": 0,
            "errorinfo": "success"
          },
          bsEl;

        bs = new browserStitial(error, data);

        bsEl = document.querySelector('#bs-container');

        expect(bsEl.style.position).toBe('absolute');

      });

  });

  describe('Listeners', function() {

    it('The Listeners should be active', function() {
      var error = false,
          data = {
            "messagetext" : "message text",
            "messagecontent": "message content",
            "appkey": "2afc468a6a7be18564ac8ac74f814308",
            "campaignid": 245,
            "templateid": 18871,
            "splitid": 311,
            "phash": "stgaaazk6P",
            "errorcode": 0,
            "errorinfo": "success"
          },
          bsEl,
          bsWrapper,
          bsClose;

        bs = new browserStitial(error, data);

        bsEl = document.querySelector('#bs-container');
        bsClose = bsEl.querySelector('.bs-close');

        bsClose.click();

        bsEl = document.querySelector('#bs-container');

        expect(bsEl).toBeNull();

      });

  });

  describe('resizeBrowserStitial (activate advanced JS)', function() {

    it('Check if Window listener is working', function() {
      var error = false,
          data = {
            "messagetext" : "message text",
            "messagecontent": "message content",
            "appkey": "2afc468a6a7be18564ac8ac74f814308",
            "campaignid": 245,
            "templateid": 18871,
            "splitid": 311,
            "phash": "stgaaazk6P",
            "errorcode": 0,
            "errorinfo": "success"
          },
          bsEl,
          bsWrapper,
          bsClose;

        bs = new browserStitial(error, data);

        bsEl = document.querySelector('#bs-container');

        switch(true) {

          case (window.innerWidth >= 701):

                expect(bsEl.style.width).toBe('600px');

                break;

          case (window.innerWidth >= 500):

                expect(bsEl.style.width).toBe('500px');

                break;

          case (window.innerWidth >= 300):

                expect(bsEl.style.width).toBe('300px');

                break;

        }

      });

  });

});