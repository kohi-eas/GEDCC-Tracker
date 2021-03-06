/**
 * App config
 */

'use strict';

module.exports = {

  data_path: __dirname + '/../data',

  strava_club_id: '198722',
  strava_login: '-',
  strava_password: '-',

  start_week: 201625,
  end_week: 201633,

  webdriverio_options: {

    logLevel: 'silent',
    waitforTimeout: 60000,
    desiredCapabilities: {
      browserName: 'chrome',
      version: '45',
      chromeOptions: {
        prefs: {
          profile: {
            default_content_setting_values: {images: 2}
          }
        }
      }
    }
  }

};
