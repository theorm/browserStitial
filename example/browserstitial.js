function browserStitial(error, data) {
  this.error = error;
  this.data = data;

  this.createBrowserStitial = function(error, data) {
    var body = document.body;
        bsEl = document.querySelector('#bs-container')

    this.error = error;
    this.data = data;

    if (bsEl) {

      this.destroyBrowserStitial();

    }

    if (error) {

      showError(error);

    } else {

      showData(error, data);

    }

  }

  this.destroyBrowserStitial = function() {
    var body = document.body;
        bsEl = document.querySelector('#bs-container');

    body.removeChild(bsEl);

  }

  var showError = function(error) {

    createElements(error);

  }

  var showData = function(error, data) {

    createElements(error, data);

  }

  var createElements = function(error, data) {
    var body = document.body;

    if (error) {
      var wrapper = crel('div', {'id':'bs-wrapper'});
          bs =
            crel('div', {'id':'bs-container'},
              crel('a', {'class':'bs-close'}),
              crel('h1', {'class':'bs-error'}),
              crel('div', {'class':'bs-footer'})
            );

    } else {
      var wrapper = crel('div', {'id':'bs-wrapper'});
          bs =
            crel('div', {'id':'bs-container'},
              crel('a', {'class':'bs-close'}),
              crel('h2', {'class':'bs-messagetext'}),
              crel('p', {'class':'bs-messagecontent'}),
              crel('div', {'class':'bs-footer'})
            );
    }

    body.appendChild(wrapper);
    body.appendChild(bs);

    bindElements(error, data);

  }

  var bindElements = function(error, data) {

    if (error) {
      var bsEl = document.querySelector('#bs-container'),
        bsError = bsEl.querySelector('.bs-error'),
        error = error

      bsError.innerHTML = error;

    } else if (data) {
      var bsEl = document.querySelector('#bs-container'),
          bsClose = bsEl.querySelector('.bs-close'),
          bsMessageText = bsEl.querySelector('.bs-messagetext'),
          bsMessageContent = bsEl.querySelector('.bs-messagecontent'),
          messagetext = decodeURIComponent(data.messagetext),
          messagecontent = data.messagecontent,
          appkey = data.appkey,
          campaignid = data.campaignid,
          templateid = data.templateid,
          splitid = data.splitid,
          phash = data.phash,
          errorcode = data.errorcode,
          errorinfo = data.errorinfo;

      bsClose.innerHTML = 'X';
      bsMessageText.innerHTML = messagetext;
      bsMessageContent.innerHTML = messagecontent;

    }

    applyStyleElements();

  }

  var applyStyleElements = function() {
    var body = document.body;
        bsWrapper = document.querySelector('#bs-wrapper'),
        bsEl = document.querySelector('#bs-container'),
        bsClose = bsEl.querySelector('.bs-close'),
        bsMessageText = bsEl.querySelector('.bs-messagetext'),
        bsMessageContent = bsEl.querySelector('.bs-messagecontent'),
        bsFooter = bsEl.querySelector('.bs-footer');

    body.style.margin = 0;

    bsWrapper.style.width = '100%';
    bsWrapper.style.height = '100%';
    bsWrapper.style.position = 'absolute';
    bsWrapper.style.zIndex = 9998;

    bsEl.style.width = '600px';
    bsEl.style.height = '400px';
    bsEl.style.position = 'absolute';
    bsEl.style.zIndex = 9999;
    bsEl.style.left = '50%';
    bsEl.style.top = '50%';
    bsEl.style.margin = '-200px 0 0 -300px';
    bsEl.style.padding = '40px 30px';
    bsEl.style.boxSizing = 'border-box';
    bsEl.style.backgroundColor = '#eeeeee';
    bsEl.style.borderRadius = '10px';
    bsEl.style.fontSize = '16px';
    bsEl.style.fontFamily = 'Arial';

    bsClose.style.position = 'absolute';
    bsClose.style.right = '10px';
    bsClose.style.top = '10px';
    bsClose.style.color = '#ffffff';
    bsClose.style.cursor = 'pointer';

    bsMessageText.style.backgroundColor = '#f8b547';
    bsMessageText.style.color = '#ffffff';
    bsMessageText.style.padding = '10px';
    bsMessageText.style.margin = 0;
    bsMessageText.style.fontSize = '1.6em';
    bsMessageText.style.lineHeight = '1em';

    bsMessageContent.style.display = 'table-cell';
    bsMessageContent.style.color = '#666666';
    bsMessageContent.style.verticalAlign = 'middle';
    bsMessageContent.style.padding = '10px';
    bsMessageContent.style.margin = 0;
    bsMessageContent.style.fontSize = '1.2em';
    bsMessageContent.style.lineHeight = '1.2em';
    bsMessageContent.style.height = '240px';

    bsFooter.style.height = '54px';
    bsEl.style.boxSizing = 'border-box';
    bsFooter.style.borderTop = '1px solid #cccccc';

    startListeners();

  }

  var startListeners = function() {
    var bsEl = document.querySelector('#bs-container'),
        bsWrapper = document.querySelector('#bs-wrapper'),
        bsClose = bsEl.querySelector('.bs-close');

    bsClose.addEventListener('click', this.destroyBrowserStitial);

    bsWrapper.addEventListener('click', this.destroyBrowserStitial);

  }

  return this.createBrowserStitial(this.error, this.data);

}