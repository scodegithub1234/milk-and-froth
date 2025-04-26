const locations = [
    {
      id: "campus",
      address: "123 Detroit Ave, Detroit, MI",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=123+Detroit+Ave+Detroit+MI",
      image: "images/campus.png",
    },
    {
      id: "midtown",
      address: "456 Cass Ave, Detroit, MI",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=456+Cass+Ave+Detroit+MI",
      image: "images/annarbor.png",
    },
    {
      id: "market",
      address: "789 Market St, Detroit, MI",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=789+Market+St+Detroit+MI",
      image: "images/market.png",
    },
  ];
  
  locations.forEach(loc => {
    const container = document.getElementById(loc.id);
  
    // Create image element
    const img = document.createElement("img");
    img.src = loc.image;
    img.alt = `${loc.id} photo`;
    img.style.width = "100%";
    img.style.borderRadius = "10px";
    img.style.marginTop = "10px";
  
    // Create maps link
    const link = document.createElement("a");
    link.href = loc.mapsLink;
    link.target = "_blank";
    link.textContent = "View on Google Maps";
    link.style.display = "inline-block";
    link.style.marginTop = "10px";
    link.style.color = "#000000";
    link.style.fontWeight = "bold";
  
    // Append to the div
    container.appendChild(link);
    container.appendChild(img);
  });