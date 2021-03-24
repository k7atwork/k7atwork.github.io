var validChars = ['2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K','L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Implementation of Luhn Mod N algorithm for check digit.
function GenerateCheckCharacter(input)
{
 var factor = 2;
 var sum = 0;
 var n = validChars.length;
 // Starting from the right and working leftwards is easier since
 // the initial "factor" will always be "2"
 for (var i = input.length - 1; i >= 0; i--)
 {
 var codePoint = validChars.indexOf(input[i]);
 var addend = factor * codePoint;
 // Alternate the "factor" that each "codePoint" is multiplied by
 factor = (factor == 2) ? 1 : 2;
 // Sum the digits of the "addend" as expressed in base "n"
 addend = Math.floor(addend / n) + (addend % n);
 sum += addend;
  }
 // Calculate the number that must be added to the "sum"
 // to make it divisible by "n"
 var remainder = sum % n;
 var checkCodePoint = (n - remainder) % n;
 return validChars[checkCodePoint];
}

function VerifyKey(key)
{
 if (key.length != 10)
 return false;
  var checkDigit = GenerateCheckCharacter(key.toUpperCase().substring(0, 9));
 return (key[9] == checkDigit);
}

function CheckUSI()
{
    var USI = document.getElementById('USI');
    if (VerifyKey(USI.value))
     alert('Valid USI');
    else
     alert('Invalid USI');
}

