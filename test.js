var test = require('ava');
var DateCalc = require('./index');

var d = new DateCalc();
var d1 = new DateCalc('20460818');

function _cover(num) {
    var n = parseInt(num, 10);
    return n < 10 ? '0' + n : n;
}

test('d.time()', t => {
    let date = new Date()
    let time = [date.getFullYear(), _cover(date.getMonth()+1), _cover(date.getDate())].join('');
    time = time + ' ' + [_cover(date.getHours()), _cover(date.getMinutes()), _cover(date.getSeconds())].join(':')
    t.is(time, d.time(date.getTime()));
});

test('d.now()', t => {
    let now = [new Date().getFullYear(), _cover(new Date().getMonth()+1), _cover(new Date().getDate())].join('')
    t.is(now, d.now());
});

test('d.now("20461001")', t => {
    t.is('20461001', d.now('20461001'));
});

test('d.weekDay("20461001")', t => {
    t.is(1, d.weekDay('20461001').day);
    t.is("Mon", d.weekDay('20461001').en);
    t.is("一", d.weekDay('20461001').cn);
});




// Test with one parameters
test('d1.now()', t => {
    t.is('20460818', d1.now());
});

test('d1.before()', t => {
    t.is('20460817', d1.before());
});

test('d1.before(2)', t => {
    t.is('20460816', d1.before(2));
});

test('d1.after()', t => {
    t.is('20460819', d1.after());
});

test('d1.after(2)', t => {
    t.is('20460820', d1.after(2));
});


//  month test

let monthTest = new DateCalc('20460818');
let monthTest1 = new DateCalc('20460118');
let monthTest2 = new DateCalc('20461218');
test('monthTest.month()', t => {
    t.is('204608', monthTest.month())
});

test('monthTest.beforeMonth()', t => {
    t.is('204607', monthTest.beforeMonth());
});

test('monthTest1.beforeMonth()', t => {
    t.is('204512', monthTest1.beforeMonth());
});

test('monthTest.afterMonth()', t => {
    t.is('204609', monthTest.afterMonth());
});
test('monthTest2.afterMonth()', t => {
    t.is('204701', monthTest2.afterMonth());
});


// month English descripe
test('month English descripe', t => {
    t.is('Jan', new DateCalc('20460118').monthEN());
    t.is('Feb', new DateCalc('20460218').monthEN());
    t.is('Mar', new DateCalc('20460318').monthEN());
    t.is('Apr', new DateCalc('20460418').monthEN());
    t.is('May', new DateCalc('20460518').monthEN());
    t.is('Jun', new DateCalc('20460618').monthEN());
    t.is('Jul', new DateCalc('20460718').monthEN());
    t.is('Aug', new DateCalc('20460818').monthEN());
    t.is('Sep', new DateCalc('20460918').monthEN());
    t.is('Oct', new DateCalc('20461018').monthEN());
    t.is('Nov', new DateCalc('20461118').monthEN());
    t.is('Dec', new DateCalc('20461218').monthEN());
});

// month Chinese descripe
test('date Chinese descripe', t => {
    t.is('2046年01月18日', new DateCalc('20460118').CHN())
});


