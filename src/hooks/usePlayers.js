import { ref, computed } from "vue";
import { useQuery, useMutation } from "villus";
import { CreatePlayer, DeletePlayer } from "./../graphql/mutations.js";
import { GetPlayers } from "./../graphql/queries.js";

const players = ref([])

export default function usePlayers() {
    const loading = ref(true)

    const { execute: createPlayerQuery } = useMutation(CreatePlayer);
    const { execute: deletePlayerQuery } = useMutation(DeletePlayer);

    const loadPlayers = async () => {
        const { data } = await useQuery({ query: GetPlayers });
        players.value = data.value.getPlayers
    }

    loadPlayers().then(() => loading.value = false)

    const createPlayer = async (variables) => {
        let { data: { createPlayer } } = await createPlayerQuery({ input: variables });
        let { id, nickname, created_on, name, photo_url } = createPlayer
        let newPlayer = { id, nickname, created_on, name, photo_url }

        players.value = players.value.concat(newPlayer)
    };

    const deletePlayer = async (id) => {
        await deletePlayerQuery({ id });
        players.value = players.value.filter((player) => player.id != id);
    };

    return {
        loading: computed(() => loading.value),
        players: computed(() => players.value),
        deletePlayer,
        createPlayer
    }
}