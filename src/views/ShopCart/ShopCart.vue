<template>
  <div class="shopCart">
    <h1>购物车</h1>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div>列表1</div>
        <div>列表2</div>
        <div>列表3</div>
        <div>列表4</div>
        <div>列表5</div>
        <div>列表6</div>
        <div>列表7</div>
        <div>列表8</div>
        <div>列表9</div>
        <div>列表10</div>
        <div>列表11</div>
        <div>列表12</div>
        <div>列表13</div>
        <div>列表14</div>
        <div>列表15</div>
        <div>列表16</div>
        <div>列表17</div>
        <div>列表18</div>
        <div>列表19</div>
        <div>列表20</div>
        <div>列表21</div>
        <div>列表22</div>
        <div>列表23</div>
        <div>列表24</div>
        <div>列表25</div>
        <div>列表26</div>
        <div>列表27</div>
        <div>列表28</div>
        <div>列表29</div>
        <div>列表30</div>
        <div>列表31</div>
        <div>列表32</div>
        <div>列表33</div>
        <div>列表34</div>
        <div>列表35</div>
        <div>列表36</div>
        <div>列表37</div>
        <div>列表38</div>
        <div>列表39</div>
        <div>列表40</div>
        <div>列表41</div>
        <div>列表42</div>
        <div>列表43</div>
        <div>列表44</div>
        <div>列表45</div>
        <div>列表46</div>
        <div>列表47</div>
        <div>列表48</div>
        <div>列表49</div>
        <div>列表50</div>
        <div>列表51</div>
        <div>列表52</div>
        <div>列表53</div>
        <div>列表54</div>
        <div>列表55</div>
        <div>列表56</div>
        <div>列表57</div>
        <div>列表58</div>
        <div>列表59</div>
        <div>列表60</div>
        <div>列表61</div>
        <div>列表62</div>
        <div>列表63</div>
        <div>列表64</div>
        <div>列表65</div>
        <div>列表66</div>
        <div>列表67</div>
        <div>列表68</div>
        <div>列表69</div>
        <div>列表70</div>
        <div>列表71</div>
        <div>列表72</div>
        <div>列表73</div>
        <div>列表74</div>
        <div>列表75</div>
        <div>列表76</div>
        <div>列表77</div>
        <div>列表78</div>
        <div>列表79</div>
        <div>列表80</div>
        <div>列表81</div>
        <div>列表82</div>
        <div>列表83</div>
        <div>列表84</div>
        <div>列表85</div>
        <div>列表86</div>
        <div>列表87</div>
        <div>列表88</div>
        <div>列表89</div>
        <div>列表90</div>
        <div>列表91</div>
        <div>列表92</div>
        <div>列表93</div>
        <div>列表94</div>
        <div>列表95</div>
        <div>列表96</div>
        <div>列表97</div>
        <div>列表98</div>
        <div>列表99</div>
        <div>列表100</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

export default {
  name:"ShopCart",
  data(){
    return{
      bscoll:null
    }
  },
  mounted() {
    this.bscoll=new BScroll('.wrapper',{
      probeType:3
    })

    this.bscoll.on('scroll',(position)=>{
      console.log(position)
    })

  }

}

</script>

<style scoped>
  .wrapper{
    height: 150px;
    overflow: hidden;
  }

</style>