import { ref, computed } from "vue";
import { useMutation } from "villus";
import { StartMatch } from "./../graphql/mutations.js";
// import { GetMatches } from "./../graphql/queries.js";

const matches = ref([])

export default function useMatches() {
    const loading = ref(true)

    const { execute: CreateMatchMutation } = useMutation(StartMatch);
    // const { execute: deletePlayerQuery } = useMutation(DeletePlayer);

    // const loadMatches = async () => {
    //     const { data } = await useQuery({ query: GetMatches });
    //     matches.value = data.value.getMatches
    // }

    // GetMatches().then(() => loading.value = false)

    const createMatch = async (variables) => {
        let { data } = await CreateMatchMutation({ input: variables });
        console.log(data)
        // let { id, nickname, created_on, name, photo_url } = createPlayer
        // let newPlayer = { id, nickname, created_on, name, photo_url }

        // players.value = players.value.concat(newPlayer)
    };

    // const deletePlayer = async (id) => {
    //     await deletePlayerQuery({ id });
    //     players.value = players.value.filter((player) => player.id != id);
    // };

    return {
        loading: computed(() => loading.value),
        matches: computed(() => matches.value),
        createMatch
    }
}