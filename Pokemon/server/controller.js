module.exports = {
  showRegion: (req, res) => {
    const trainerName =  document.getElementById("trainerName")
    const selectRegion = document.getElementById("regions")
    const region = selectRegion.value;
    const name = trainerName.value;
    
    res.status(200).send(alert(`Hi ${name}, thank you for joining the ${region}!`));

  }
   
}