function dateFormat(aDate) {

  aDate = aDate.split(' ');
  // console.log(" split " , aDate);
  // 2021-11-08T03:14:00.000+00:00
  // console.log(aDate[2]);
  aDate[1] = aDate[1].replace(',', '');
  aDate[2] = aDate[2].replace(',', '');

  var preMonth = aDate[0];

  // console.log("pre", preMonth);
  // console.log("month as it is:", preMonth);

  var mmmToMM = {
    'Jan.': '01',
    'Feb.': '02',
    'March': '03',
    'April': '04',
    'May': '05',
    'June': '06',
    'July': '07',
    'Aug.': '08',
    'Sept.': '09',
    'Oct.': '10',
    'Nov.': '11',
    'Dec.': '12'
  }

  aDate[0] = mmmToMM[preMonth];

  /* console.log("formattedMonth preMonth", mmmToMM[preMonth]);
  console.log ( aDate.substr(0, 4)); */
  // console.log("convert", mmmToMM[preMonth]);
  // aDate = (aDate.join(''));
  // console.log(aDate[4]);

  if (aDate[3] == "midnight") {
    aDate[3] = "00:00";
  }

  let [hours, minutes] = aDate[3].split(':');

  if (minutes == null) minutes = '00';
  if (hours == 12) hours = '00';
  switch (aDate[4]) {

  case 'p.m.':
    hours = (+hours + 12)
    // console.log("hours", hours);
    aDate[3] = hours + ":" + minutes;
    // console.log(aDate[3]);
    break;

  case 'p.m':
    hours = (+hours + 12)
    // console.log("hours", hours);
    aDate[3] = hours + ":" + minutes;
    // console.log(aDate[3]);
    break;

  case 'a.m.':
    // console.log("hours", parseInt(hours));
    // hours = hours ? hours : 12; 
    if (hours == 12) {
      hours = '00'
    }
    aDate[3] = hours + ":" + minutes;
    // console.log(aDate[3]);
    break;

  case 'a.m':
    // console.log("hours", hours);
    if (hours == 12) hours = '00';
    // console.log(hours);
    aDate[3] = hours + ":" + minutes;
    // console.log(aDate[3]);
    break;

  default:
    break;
  }

  aDate.splice(4); // remove the a.m or p.m
  // aDate[4]= 'Z';
  // console.log(aDate);
  return aDate.join(' ');
  // 2021-11-08T03:14:00.000+00:00
}

module.exports = dateFormat;

/* //2021-11-08T03:14:00.000+00:00
// 11 5, 2021, 17:01Z
//2021-11-06 T02:01:00.000+00:00
//2021-11-05 T22:01:00.000+00:00
// %m %d %Y    %H:%M
//const dateObj = new Date(aDate);
//console.log(dateFormat(aDate));
//console.log(aDate.toISOString());

//aDate=( "2017-05-06T01:52:00.000+00:00");
aDate= new Date( "2017-05-06T01:52:00.000+00:00");
console.log(aDate.toISOString());
console.log(aDate.toLocaleTimeString('en-US'));
//console.log(dateFormat(aDate));
console.log(aDate.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}));

console.log(aDate.toLocaleString('en-US'));

console.log(aDate.toLocaleString('en-US'));
 aDate= new Date( "2017-05-06T01:52:00.000+00:00");
console.log(aDate);
console.log(aDate.toLocaleTimeString('en-US'));
//console.log(dateFormat(aDate));
console.log(aDate.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}));

console.log(aDate.toLocaleString('en-US'));

       console.log(blah);
      console.log(moment.utc(blah).format('MMM D DD YYYY  h hh	a A'));

      2021-11-19T23:09:00.000+00:00

      MMM D DD YYYY  h hh	a A  it is utc Z
      Nov. 19, 2021, 7:47 p.m.

      console.time("date speed test");
      let tempdate = (new Date(table[i]));
      console.log(tempdate);
      //fight.timeOf = (moment(table[i]).toISOString());
      //fight.timeOf = ((moment(table[i]).toISOString()));
      //fight.timeOf = (dateFormat(table[i]) + 'Z');
      //console.timeEnd("date speed test");

console.log(aDate.toLocaleString('en-US')); */