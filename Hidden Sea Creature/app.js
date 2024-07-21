const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
}

const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

function pAequorFactory(organismId, dnaBases) {
  return {
    specimenNum: organismId,
    dna: dnaBases,

    mutate() {
      const index = Math.floor(Math.random() * this.dna.length);
      let newBase;

      do {
        newBase = returnRandBase();
      } while (newBase === this.dna[index]);

      this.dna[index] = newBase;
      return this.dna;
    },

    compareDNA(otherPAequor) {
      if (!otherPAequor || !Array.isArray(otherPAequor.dna)) {
        throw new Error("Invalid pAequor object provided for comparison.");
      }

      let identicalBases = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPAequor.dna[i]) {
          identicalBases++;
        }
      }

      const percentageInCommon = (identicalBases / this.dna.length) * 100;

      console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentageInCommon.toFixed(2)}% DNA in common.`);
    },

    willLikelySurvive() {
      const survivalBases = this.dna.filter(base => base === 'C' || base === 'G').length;
      return (survivalBases / this.dna.length) >= 0.6;
    }
  }
}

const survivingPAequor = [];
let idCounter = 1;

while (survivingPAequor.length < 30) {
  const newPAequor = pAequorFactory(idCounter, mockUpStrand());
  if (newPAequor.willLikelySurvive()) {
    survivingPAequor.push(newPAequor);
  }
  idCounter++;
}

if (survivingPAequor.length > 1) {
  survivingPAequor[0].compareDNA(survivingPAequor[1]);
}
