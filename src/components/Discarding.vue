<template>
	<div class="discarding">
		<h2 class="banger orange">Choose Upgrade to Discard</h2>
		<p>Then you'll choose your mission.</p>
		<div v-for="(player, idx) in players" :key="player.name" class="upgrade-player-area">
			<div class="">
				<h3 class="banger center hero-name" :class="player.hero.cssClass">{{player.hero.name}}</h3>
			</div>

			<Upgrade
				v-for="upgrade in player.upgrades"
				:upgrade="upgrade"
				:key="upgrade.name"
				:choice="true"
				:active="upgradeSelected(idx, upgrade.name)"
				v-on:clicked="() => toggleDiscardSelection(idx, upgrade.name)">
			</Upgrade>

		</div>
		<button class="big-button" @click="confirmDiscards">Confirm Discards</button>
    <div class="next-step">Next: Choose Mission</div>
	</div>
</template>
<script lang="ts">
	import Vue from "vue"
	import {mapState, mapGetters} from "vuex"
	import Upgrade from "@/components/Upgrade.vue";
	// eslint-disable-next-line no-unused-vars
	import {Player} from "@/types/player";
	export default Vue.extend({
		name: 'Discarding',
		components: {
			Upgrade
		},
		computed: {
			...mapState(['players', 'upgradeOptions', 'activeGameIndex', 'numGames']),
			...mapGetters(['upgradeSelected'])
		},
		methods: {
			toggleDiscardSelection (playerIndex: number, upgradeName: string) {
				this.$store.dispatch('toggleUpgradeSelection', {
					playerIndex,
					upgradeName
				})
			},
			confirmDiscards () {
				const missing : string[] = []
				this.players.forEach((player: Player, idx: number) => {
					if (!this.$store.state.upgradeSelections[idx]) {
						missing.push(player.hero.name)
					}
				})
				if (missing.length > 0) {
					let msg = ''
					if (missing.length == 1) {
						msg = missing[0] + ' is missing a selection.'
					} else {
						let popped = missing.pop()
						msg = missing.join(', ')
						msg += ' and ' + popped + ' are missing selections.'
					}
					if (!alert(msg)) {
						return
					}
				}
				try {
					this.$store.dispatch('confirmDiscards')
				} catch (ex) {
					alert(ex)
					throw ex
				}
			},
		}
	})
</script>
