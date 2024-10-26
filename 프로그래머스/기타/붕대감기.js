function solution(bandage, health, attacks) {
  let heal = health;
  let attack = attacks.slice();
  let healTime = 0;
  let endTime = attacks[attacks.length - 1][0];

  for (let i = 1; i < endTime + 1; i++) {
    if (i === attack[0]?.[0]) {
      heal = heal - attack[0][1];
      attack.shift();
      healTime = 0;
      if (heal <= 0) {
        return -1;
      }
    } else {
      if (heal < health) {
        heal = heal + bandage[1];
        healTime += 1;

        if (healTime === bandage[0]) {
          heal = heal + bandage[2];
          healTime = 0;
        }
      }

      if (heal > health) {
        heal = health;
        healTime = 0;
      }
    }
  }

  return heal;
}
