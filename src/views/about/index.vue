<script lang="tsx">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    function loginOut() {
      router.push("/login");
    }
    return () => (
      <el-button type="primary" onClick={loginOut}>
        退出登陆
      </el-button>
    );
  }
});
</script>
