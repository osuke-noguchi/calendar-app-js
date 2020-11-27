<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" class="text-center">
      <p class="display-1 py-12">
        サンプルアプリケーションにサインインする
      </p>
      <div class="mt-3">
        <v-btn
          width="300"
          large
          color="#1DA1F2"
          class="white--text text-none"
          @click="signIn"
        >
          Sing In with SNS1
        </v-btn>
      </div>
      <div class="mt-3">
        <v-btn
          width="300"
          large
          color="#DD2A7B"
          class="white--text text-none"
          @click="signIn"
        >
          Sing In with SNS2
        </v-btn>
      </div>
      <div class="mt-3">
        <v-btn
          width="300"
          large
          color="#3B5998"
          class="white--text text-none"
          @click="signIn"
        >
          Sing In with SNS3
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup(prop, context) {
    const signIn = () => {
      context.root.$router.push('/');
    };

    return {
      signIn,
    };
  },
});
</script>
