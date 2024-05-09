import jsonData from "../../data.json"

try {
    const jsonData = require("../../data.json");
} catch (error) {
    console.error("Error parsing JSON: ",error);
}