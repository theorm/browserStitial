describe('BrowserStitial', function() {

  describe('Check dependencies', function() {

    it('Crel should be loaded', function() {

      expect(typeof crel()).toBe('object');

    });

  });

  describe('Constructor createBrowserStitial', function() {
    var error = false;
    var data = {
      "messagetext" : "message text",
      "messagecontent": "message content",
      "appkey": "2afc468a6a7be18564ac8ac74f814308",
      "campaignid": 245,
      "templateid": 18871,
      "splitid": 311,
      "phash": "stgaaazk6P",
      "errorcode": 0,
      "errorinfo": "success"
    }
    var bs = new browserStitial(error, data);

    it('Check error value', function() {

      expect(bs.error).toBe(error);

    });

    it('Check data values', function() {

      expect(bs.data).toBe(data);

    });

    it('All BrowserStitial should be destroyed', function() {
      var bsEl = document.querySelector('#bs-container');

      expect(bsEl).toBeDefined();
    });

  });

});