<template>
  <div class="home">
    <div class="row">
      <div class="col left">
        <recent-activity :recent="recentActivities"></recent-activity>
        <data-entry></data-entry>
      </div>
      <div class="col right">
        <progress-tracker></progress-tracker>
      </div>
    </div>
  </div>
</template>

<script>
import DataEntry from '@/components/DataEntry.vue'
import ProgressTracker from '@/components/ProgressTracker.vue'
import RecentActivity from '@/components/RecentActivity.vue'

export default {
  name: 'Home',
  computed: {
    activities () {
      return this.$store.state.activities;
    },
    recentActivities () {
      const sorted = this.activities.slice(0).sort((b, a) => a.date - b.date);
      return sorted.length > 5 ? sorted.slice(0, 5) : sorted;
    }
  },
  components: {
    DataEntry,
    ProgressTracker,
    RecentActivity
  }
}
</script>

 <style lang="scss">
  .home {
    height: 86%;
    padding: 3em;
    .row {
      display: flex;
      height: 100%;
      justify-content: space-between;
      width: 100%;
      .col {
        display: flex;
        flex-direction: column;
        justify-content: space-start;
        padding: 0 1.5rem;
        width: 36%;
        &.left {
          width: 64%;
        }
      }
      #data-entry {
        margin-top: 3rem;
      }
    }
  }
 </style>