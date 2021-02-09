<template>
  <table class="collapse ba br2 b--black-10 pv2 ph3">
    <tbody>
      <tr class="">
        <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
        <th class="pv2 ph3 tl f6 fw6 ttu">Nickname</th>
        <th class="tr f6 ttu fw6 pv2 ph3">Rating</th>
        <th class="tr f6 ttu fw6 pv2 ph3 fl">Created</th>
      </tr>
      <tr
        v-for="player in data.getPlayers"
        :key="player.id"
        class="striped--light-gray"
      >
        <td class="pv2 ph3">{{ player.name }}</td>
        <td class="pv2 ph3">?</td>
        <td class="pv2 ph3">?</td>
        <td class="pv2 ph3">{{ player.created_on }}</td>
        <td class="pv2 ph3 dim">Delete</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { useQuery, useMutation } from "villus";

export default {
  name: "App",
  async setup() {
    const getPlayers = `
    query getPlayers {
        getPlayers {
            created_on
            id
            name
        }
    }
    `;

    const DeletePlayer = `
        mutation createPlayer($input: PlayerInput!) {
            createPlayer(input: $input) {
                id
            }
        }
    `;
    const { data } = await useQuery({
      query: getPlayers,
    });

    const { execute } = useMutation(DeletePlayer);

    async function deletePlayer(id) {
      const variables = {
        id,
      };

      await execute({ input: variables }).then((result) => {
        if (result.error) {
          console.log(result.error);
          // Do something
        } else {
          console.log("nothing bad happened");
        }
      });
    }

    return { data, deletePlayer };
  },
};
</script>
