<script setup lang="ts">
import {
  Badge,
  Button,
  ReportModal,
  ProjectCard,
  ScaleIcon,
} from "omorphia";
import "omorphia/dist/style.css";

const isTextVisible = ref(false);

//markdownEditor


function onButtonPress() {
  isTextVisible.value = true;
}

const reportModal = ref<typeof ReportModal | null>(null);

function onPrisonSend() {
  alert("sent to prison");
}
</script>

<template>
  <div>
    <!-- <Badge type="admin"></Badge>
    <Button large color="green" @click="onButtonPress">Click me</Button>
    <template v-if="isTextVisible">Hehe you pressed the button</template> -->

    <Button @click="reportModal?.show()">Show Modal</Button>
    <ReportModal
      ref="reportModal"
      itemType="project"
      :reportTypes="[
        'Stolen from nineMinecraft',
        'Created by Curseforge User',
        'notgamer',
        'windowsuser',
      ]"
    />

    <div v-if="data" class="project-list display-mode--list">
      <ProjectCard
        :id="ID"
        :type="project_type"
        :name="title"
        :author="sortedMembers"
        :iconUrl="icon_url"
        :description="description"
        :downloads="download"
        :follows="followers"
        :createdAt="published"
        :updatedAt="updated"
        :projectTypeDisplay="roject_type"
        :projectTypeUrl="oject_type"
        :serverSide="server_side"
        :clientSide="client_side"
        :showUpdatedDate="false"
        :color="color"
      ></ProjectCard>
    </div>
    <!-- <template v-else>Data is not loaded yet</template> -->

    <!-- <ProjectCard
      id="sodium"
      type="mod"
      name="notSodium"
      author="jellysquid3"
      description="I am way too lazy"
      iconUrl="https://github.com/worldwidepixel/tencraft/blob/main/img/9icon.png?raw=true"
      downloads="1.51M"
      follows="-3511"
      createdAt="2020-12-27T19:00:00.000Z"
      updatedAt="2021-01-01T19:00:00.000Z"
      projectTypeDisplay="mod"
      projectTypeUrl="/mod"
      serverSide="required"
      clientSide="required"
      :showUpdatedDate="false"
      color="1716041"
    ></ProjectCard>

    Time to use some MR branding
    <TextLogo :animate="true"></TextLogo> -->

    amogus

    <Button color="highlight" @click="onPrisonSend">
      <ScaleIcon /> Send to Prison
    </Button>

    <Badge type="admin" />
    <Badge type="moderator" />
    <Badge type="creator" />

    <Badge type="approved" />
    <Badge type="approved-general" />
    <Badge type="unlisted" />
    <Badge type="withheld" />
    <Badge type="private" />
    <Badge type="scheduled" />
    <Badge type="draft" />
    <Badge type="archived" />
    <Badge type="rejected" />
    <Badge type="processing" />

    <Badge type="accepted" />
    <Badge type="pending" />

    <Badge type="processed" />
    <Badge type="failed" />
    <Badge type="returned" />

    <Badge type="closed" />

    <MarkdownEditor v-model="description" />
  </div>
</template>
