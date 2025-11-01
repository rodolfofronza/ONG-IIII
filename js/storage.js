// Salva dados do voluntário no localStorage
export function saveVolunteer(data) {
  const volunteers = JSON.parse(localStorage.getItem('volunteers')) || [];
  volunteers.push(data);
  localStorage.setItem('volunteers', JSON.stringify(volunteers));
}
