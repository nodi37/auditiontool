import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReviewNotesView from "../views/engagements/ReviewNotesView.vue";
import EngagementsListView from "../views/engagements/EngagementsListView.vue";
import TaskListView from "../views/engagements/TaskListView.vue";
import NoteView from "../views/NoteView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/engagements",
    name: "EngagementsList",
    component: EngagementsListView,
  },
  {
    path: "/engagements/2021_0001/",
    name: "TaskList",
    component: TaskListView,
  },
  {
    path: "/engagements/2021_0001/reviewnotes",
    name: "ReviewNotes",
    component: ReviewNotesView,
  },
  {
    path: "/engagements/2021_0001/:id",
    name: "Note",
    component: NoteView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
