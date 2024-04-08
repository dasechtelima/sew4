import {defineStore} from 'pinia';
import {ref} from "vue";
import {v4 as uuidv4} from 'uuid';

export const useCompetitorStore = defineStore('competitor', () => {
            const competitors = ref([]);
            const competitorRanks = [];

            function addCompetitor(newCompetitor) {
                const {firstname, lastname, rank, newRank} = newCompetitor;
                const id = uuidv4();
                if (rank && !competitorRanks[rank - 1]) {
                    competitorRanks[rank - 1] = id;
                    competitors.value.push({firstname, lastname, rank, id, newRank});
                } else {
                    competitors.value.push({firstname, lastname, id, newRank});
                    // console.log("----- addCompetitor:")
                    // console.log(competitors.value);
                    // console.log("----- competitorRanks after adding:")
                    // console.log(competitorRanks);
                    sortCompetitorsByLastname();
                }
                sortCompetitorsByLastname();
                // console.log("----- addCompetitor:")
                // console.log(competitors.value);
                // console.log("----- competitorRanks after adding:")
                // console.log(competitorRanks);
            }

            function sortCompetitorsByLastname() {
                competitors.value.sort((a, b) => a.lastname.localeCompare(b.lastname));
            }

            function updateRank(competitor) {
                const newRank = competitor.newRank;
                const id = competitor.id;
                // console.log("----- updateRank of competitor:")
                // console.log(competitor);
                if (competitor) {
                    const oldRank = competitor.rank;
                    if (!competitorRanks[newRank - 1]) {
                        competitor.rank = newRank;
                        competitorRanks[newRank - 1] = id;
                        if (oldRank) {
                            competitorRanks[oldRank - 1] = null;
                        }
                        competitor.newRank = null;
                        // console.log("----- competitorRanks after update:")
                        // console.log(competitorRanks);
                        sortCompetitorsByLastname();
                    } else {
                        throw new Error(`Rank ${newRank} is already assigned to another competitor.`);
                    }
                } else {
                    throw new Error(`Competitor with id ${id} does not exist.`);
                }
            }

            return {competitors, addCompetitor, updateRank, competitorRanks};
        }
    )
;