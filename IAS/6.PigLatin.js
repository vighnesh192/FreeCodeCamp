function translatePigLatin(str) {
    const consonants = /\b[^aeiou]+/i;
    
    if(str.match(consonants)) {
      const consonantsInARow = str.match(consonants)[0];
      str = str.replace(consonants, '');
      str = str + consonantsInARow + 'ay';
      return str;
    }
    else {
      str = str + 'way';
    }
    return str;
  }
  
  translatePigLatin("eight");