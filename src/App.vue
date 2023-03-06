<template>
  <div class="w-full min-h-screen bg-gray-100 p-5">
    <div class="flex">
      <div class="mr-5 p-3 bg-white">
        <img
          src="https://nos.wjv-1.neo.id/himpsi-sik-prod/profil-user/anggota/1019/ERROR%20400.png"
          alt="acumalaka"
          class="w-[210px] h-[210px] object-cover"
        />
        <BaseBtn
          class="py-2 px-5 flex items-center mt-5"
          flat
          bg="bg-himpsi-purple"
          @click="
            downloadContent(
              'https://nos.wjv-1.neo.id/himpsi-sik-prod/profil-user/anggota/1019/ERROR%20400.png',
            )
          "
        >
          Unduh</BaseBtn
        >
      </div>
      <div class="mr-5 p-3 bg-white">
        <img
          src="https://nos.wjv-1.neo.id/himpsi-sik-prod/master/asosiasi/1/logo.png"
          alt="acumalaka"
          class="w-[210px] h-[210px] object-cover"
        />
        <BaseBtn
          class="py-2 px-5 flex items-center mt-5"
          flat
          bg="bg-himpsi-purple"
          @click="
            downloadContent(
              'https://nos.wjv-1.neo.id/himpsi-sik-prod/master/asosiasi/1/logo.png',
            )
          "
        >
          Unduh</BaseBtn
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const error = ref("");
const downloadContent = (url) => {
  fetch(url)
    .then((response) => {
      // Menyimpan respons ke dalam bentuk blob
      return response.blob();
    })
    .then((blob) => {
      // Membuat objek URL dari blob
      const url = window.URL.createObjectURL(blob);
      // Membuat anchor untuk mengunduh file
      const a = document.createElement("a");
      a.href = url;
      a.download = "logo.png";
      // Menambahkan anchor ke dalam dokumen
      document.body.appendChild(a);
      // Mengklik anchor untuk mengunduh file
      a.click();
      // Menghapus objek URL setelah selesai mengunduh
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error(error);
    });
};
</script>

<style scoped></style>
