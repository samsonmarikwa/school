import axios from "axios";

export default {
  /*
  // Gets all school records
  getSchoolRecords: function() {
    return axios.get("/api/schoolrecords");
  },
  // Gets a school record with the given id
  getSchoolRecord: function(id) {
    return axios.get("/api/schoolrecords/" + id);
  },
  // Deletes the school record with the given id
  deleteSchoolRecord: function(id) {
    return axios.delete("/api/schoolrecords/" + id);
  },

  */
  // Saves a person record to the database
  savePersonRecord: function(personRecord) {
    console.log("savePersonRecord: " + personRecord);
    return axios.post("/person/api/personrecords", personRecord);
  },

  // Saves education record to the database
  saveEducationRecord: function(educationRecord) {
    console.log("saveEducationRecord: " + educationRecord);
    return axios.post("/education/api/educationrecords", educationRecord);
  }
};
