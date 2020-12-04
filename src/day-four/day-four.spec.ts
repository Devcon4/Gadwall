import { parsePassports, parsePassportsStrict, validators } from './day-four'
 
test('day four part one', () => {
    const data = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in
`;

    expect(parsePassports(data)).toEqual(2);
});
test('day four part two', () => {
    const invalid = `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007
`;
    const valid = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719
`;

    expect(parsePassportsStrict(invalid)).toEqual(0);
    expect(parsePassportsStrict(valid)).toEqual(4);
});

test('day four part two validations', () => {
    const byrValid = {byr:'2002'}, byrInvalid = {byr:'2003'};

    expect(validators['byr']('byr', byrValid)).toBeTruthy();
    expect(validators['byr']('byr', byrInvalid)).toBeFalsy();

    const hgtValid1 = {hgt:'60in'}, hgtInvalid1 = {hgt:'190in'};
    const hgtValid2 = {hgt:'190cm'}, hgtInvalid2 = {hgt:'190'};

    expect(validators['hgt']('hgt', hgtValid1)).toBeTruthy();
    expect(validators['hgt']('hgt', hgtValid2)).toBeTruthy();
    expect(validators['hgt']('hgt', hgtInvalid1)).toBeFalsy();
    expect(validators['hgt']('hgt', hgtInvalid2)).toBeFalsy();

    const hclValid1 = {hcl:'#123abc'}, hclInvalid1 = {hcl:'#123abz'}, hclInvalid2 = {hcl:'123abc'};

    expect(validators['hcl']('hcl', hclValid1)).toBeTruthy();
    expect(validators['hcl']('hcl', hclInvalid1)).toBeFalsy();
    expect(validators['hcl']('hcl', hclInvalid2)).toBeFalsy();

    const eclValid = {ecl:'brn'}, eclInvalid = {ecl:'wat'};

    expect(validators['ecl']('ecl', eclValid)).toBeTruthy();
    expect(validators['ecl']('ecl', eclInvalid)).toBeFalsy();
    
    const pidValid = {pid:'000000001'}, pidInvalid = {pid:'0123456789'};

    expect(validators['pid']('pid', pidValid)).toBeTruthy();
    expect(validators['pid']('pid', pidInvalid)).toBeFalsy();
});