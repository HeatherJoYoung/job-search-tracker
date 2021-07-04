<template>
  <div class="home">
    <div class="row">
      <recent-activity></recent-activity>
      <progress-tracker></progress-tracker>
    </div>
    <div class="row">
      <data-entry></data-entry>
    </div>
  </div>
</template>

<script>
import DataEntry from '@/components/DataEntry.vue'
import ProgressTracker from '@/components/ProgressTracker.vue'
import RecentActivity from '@/components/RecentActivity.vue'

export default {
  name: 'Home',
  components: {
    DataEntry,
    ProgressTracker,
    RecentActivity
  }
}
</script>

 <style lang="scss">
  .home {
    padding: 3em;
    .row {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
    }
  }
 </style>