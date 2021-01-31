import axios from "axios";
//still need to set up axios
const requestData;

$.ajax({
  url: "https://randomuser.me/api/?results=100",
  dataType: "json",
  success: function (data) {
    requestData = data;
  },
});

console.log(requestData);

export default requestData;
