# Husky Git Hooks 配置说明

本项目使用 Husky 来管理 Git hooks，确保代码质量。

## 已配置的 Hooks

### 1. pre-commit
**触发时机**：在执行 `git commit` 之前

**作用**：
- 运行 `yarn check`（Biome 代码检查，包含 lint 和 format）
- 确保代码符合项目规范

**如何通过**：
- 运行 `yarn check:fix` 自动修复大部分问题
- 或手动修复 Biome 报告的问题

### 2. commit-msg
**触发时机**：在编写提交信息后

**作用**：
- 验证提交信息格式是否符合规范

**提交信息格式规范**：
```
type(scope): subject
```

**类型（type）**：
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档修改
- `style`: 代码格式修改（不影响功能）
- `refactor`: 重构（既不是新功能也不是修复）
- `test`: 添加或修改测试
- `chore`: 构建过程或辅助工具的变动
- `perf`: 性能优化
- `ci`: CI/CD 相关
- `build`: 构建系统或依赖项修改
- `revert`: 回滚提交

**示例**：
```bash
git commit -m "feat(auth): add user login"
git commit -m "fix(api): handle null response"
git commit -m "docs: update README"
```

### 3. pre-push
**触发时机**：在执行 `git push` 之前

**作用**：
- 运行 `yarn test`（单元测试）
- 确保所有测试通过后才能推送

**如何通过**：
- 确保所有测试用例通过
- 修复失败的测试

## 跳过 Hooks（不推荐）

在特殊情况下，可以使用以下命令跳过 hooks：

```bash
# 跳过 pre-commit 和 commit-msg
git commit --no-verify -m "message"

# 跳过 pre-push
git push --no-verify
```

**注意**：不建议跳过 hooks，这会降低代码质量。

## 故障排除

### Hooks 不生效
```bash
# 重新安装 husky
yarn prepare
```

### 权限问题（Linux/Mac）
```bash
chmod +x .husky/*
```

### Windows 问题
确保使用 Git Bash 或 WSL 来运行 Git 命令。
