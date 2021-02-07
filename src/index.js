module.exports = function toReadable (number) {
  switch(number.toString().length) {
      case 1:
        return OneNumber (number);
      case 2:
        return TwoNumbers (number);
      case 3:
        if (number % 100 == 0) {
          return `${ OneNumber( +number.toString().slice(0, 1))} hundred`
        }  
        else {
          let first = OneNumber( +number.toString().slice(0, 1)),
              second = TwoNumbers( +number.toString().slice(1) );

          return `${ first } hundred ${ second }`;
        }
      default:
        return 'smth went wrong'
    }

    function OneNumber (num) {
      let x = '';

      switch(num) {
        case 1:
          x = 'one';
          break;
        case 2:
          x = 'two';
          break;
        case 3:
          x = 'three';
          break;
        case 4:
          x = 'four';
          break;
        case 5:
          x = 'five';
          break;
        case 6:
          x = 'six';
          break;
        case 7:
          x = 'seven';
          break;
        case 8:
          x = 'eight';
          break;
        case 9:
          x = 'nine';
          break;
        case 0:
          x = 'zero';
          break;
        default:
          return ''
      }
      return x;
    }

    function TwoNumbers (num) {
      let x = '';

      switch(num) {
        case 10:
          x = 'ten';
          break;
        case 11:
          x = 'eleven';
          break;
        case 12:
          x = 'twelve';
          break;
        case 13:
          x = 'thirteen';
          break;
        case 14:
          x = 'fourteen';
          break;
        case 15:
          x = 'fifteen';
          break;
        case 16:
          x = 'sixteen';
          break;
        case 17:
          x = 'seventeen';
          break;
        case 18:
          x = 'eighteen';
          break;
        case 19:
          x = 'nineteen';
          break;
        case 20:
          x = 'twenty';
          break;
        case 30:
          x = 'thirty';
          break;
        case 40:
          x = 'forty';
          break;
        case 50:
          x = 'fifty';
          break;
        case 60:
          x = 'sixty';
          break;
        case 70:
          x = 'seventy';
          break;
        case 80:
          x = 'eighty';
          break;
        case 90:
          x = 'ninety';
          break;
        default:

          if (num < 10) {
            x = `${OneNumber( +num.toString().slice(-1))}`
            return x;

          } else {
          x = `${ TwoNumbers(num - (+num.toString().slice(-1)))} ${ OneNumber( +num.toString().slice(-1))}`
            return x;
          }
      }
      return x;
    }
}
