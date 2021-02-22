import { ref, computed } from "vue";
import { useMutation, useQuery } from "villus";
import { StartMatch, EndMatch } from "./../graphql/mutations.js";
import { useRouter } from 'vue-router'
import { GetMatches } from "./../graphql/queries.js";

const matches = ref([])

export default async function useMatches() {
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
        await CreateMatchMutation({ input: variables });
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