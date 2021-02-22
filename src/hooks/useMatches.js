import { ref, computed } from "vue";
import { useMutation, useQuery } from "villus";
import { StartMatch, EndMatch } from "./../graphql/mutations.js";
import { useRouter } from 'vue-router'
import { GetMatches } from "./../graphql/queries.js";

const matches = ref([])

export default function useMatches() {
    const loading = ref(true)

    const router = useRouter()
    const { execute: CreateMatchMutation } = useMutation(StartMatch);
    const { execute: EndMatchMutation } = useMutation(EndMatch);

    const getMatches = async () => {
        const { data } = await useQuery({ query: GetMatches });
        matches.value = data.value.getMatches
    }

    const endMatch = async (id) => {
        await EndMatchMutation({ id });
        matches.value = matches.value.map(match => {
            if (match.id === id) {
                match.is_active = false
            }

            return match
        })
    }

    const createMatchAndRedirect = async (variables) => {
        const { data: { startMatch } } = await CreateMatchMutation({ input: variables });
        let { id, start_time, is_active } = startMatch
        matches.value = matches.value.concat({ id, start_time, is_active })
        router.push("/matches/current")
    };

    getMatches().then(() => loading.value = false)

    return {
        loading: computed(() => loading.value),
        matches: computed(() => matches.value),
        createMatchAndRedirect,
        endMatch
    }
}