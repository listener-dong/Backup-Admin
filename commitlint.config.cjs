module.exports = {
  ignores: [commit => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能
        "fix", // 修复bug
        "perf", // 性能优化
        "style", // 代码的样式美化
        "docs", // 文档变更
        "test", // 测试
        "refactor", // 重构
        "build", // 打包
        "ci", // CI related changes
        "chore", // 构建/工程依赖/工具
        "revert", // 回退
        "wip", // 进行中
        "workflow", // 工作流
        "types", // 类型
        "release" // 发布正式版
      ]
    ]
  }
};
