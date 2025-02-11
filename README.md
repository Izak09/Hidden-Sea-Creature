Hidden Sea Creature

The Hidden Sea Creature simulates the creation and evolution of digital organisms (pAequor) with DNA sequences. Each organism has unique DNA, and the project includes methods to mutate DNA, compare DNA between organisms, and determine the survival likelihood of organisms based on their DNA composition.

FUNCTIONS - (returnRandBase):

Returns a random DNA base ('A', 'T', 'C', or 'G'):
---------------------------------------------------
const returnRandBase = () => {

  const dnaBases = ['A', 'T', 'C', 'G'];
  
  return dnaBases[Math.floor(Math.random() * 4)];
  
}
---------------------------------------------------


Creates a mock DNA strand consisting of 15 bases - mockUpStrand():

------------------------------------------------------------------
const mockUpStrand = () => {

  const newStrand = [];
  
  for (let i = 0; i < 15; i++) {
  
   newStrand.push(returnRandBase());
    
  }
  
  return newStrand;
  
}
------------------------------------------------------------------



Factory function to create pAequor objects with specified organismId and dnaBases. The returned object includes methods for mutating DNA, comparing DNA, and determining survival likelihood - pAeqourFactory:

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
USAGE: 

Mutate
Mutates a random base in the DNA sequence of the pAequor object.

Compare DNA
Compares the DNA sequence of one pAequor object with another and prints the percentage of identical bases.

Will Likely Survive
Determines if a pAequor object is likely to survive based on having at least 60% 'C' or 'G' bases.

Creating pAequor Specimens
Generates pAequor objects and filters them to find those likely to survive.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The pAequor Project provides a fascinating look into the simulation of digital organisms with unique DNA sequences. Through its various functions, you can create, mutate, and compare these organisms, as well as assess their likelihood of survival based on their DNA composition. This project not only demonstrates key concepts in JavaScript such as factory functions, array manipulation, and randomization but also offers an engaging way to understand genetic variations and survival probabilities. 


By working through this project, you gain practical experience in developing and using factory functions to generate objects dynamically. The implementation of mutation functions showcases how you can alter data within objects and apply conditions to ensure meaningful changes. Comparing DNA sequences between organisms provides insights into array traversal and comparison logic, while assessing survival likelihood based on DNA composition highlights the use of filtering and calculating proportions.


