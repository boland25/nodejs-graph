// Licensed under the Apache License, Version 2.0 (the 'License'); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

'use strict';

module.exports = function () {
  /*
    GET current schema
   */
  this.get = function (callback) {

    var opts = {
      url: '/schema',
      method: 'GET',
      json: true,
    };

    return this.apiCall(opts, callback);

  };
  /*
    POST new schema
   */
  this.set = function (schema, graphName, callback) {

    if (typeof graphName === 'function') {
      console.log("Schema needs a graph name in order to work");
      return;
    }
    var opts = {
      url: this.schemaURL(graphName),
      method: 'POST',
      json: true,
      body: schema,
    };
    console.log("Set Schema " + opts.url.baseURL);
    return this.apiCall(opts, callback);

  };

  this.schemaURL = function (graph) {
    return {
      baseURL: this.config.url.substr(0, this.config.url.lastIndexOf('/')),
      url: (graph) ? '/' + graph + '/schema' : '/schema',
    };
  };

  return this;
};
