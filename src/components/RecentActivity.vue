<template>
    <div class="recent-activity">
        <h2>Recent Activity</h2>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Activity</th>
                    <th>Contact</th>
                    <th>Company</th>
                    <th>Job</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="a in recent" :key="a.index">
                    <td v-html="`${a.date.getMonth()}/${a.date.getDate()}/${a.date.getFullYear()}`"></td>
                    <td>{{a.activityType}}</td>
                    <td>{{a.contact}}</td>
                    <td>{{a.company}}</td>
                    <td>{{a.job}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>
export default {
  name: 'RecentActivity',
  props: {
      recent: Array
  }
}
</script>

<style lang="scss">

.recent-activity {
    background-color: rgb(214, 236, 248);
    border: 0.5rem solid whitesmoke;
    min-height: 260px;
    padding: 1rem;
    width: auto;
    table {
        background-color: whitesmoke;
        border: 1px solid #adabab;
        font-size: 0.75rem;
        width: 100%;
    }
}

</style>