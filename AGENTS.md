<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

<!-- LOVABLE:BEGIN-PROJECT-RULES -->
- User-uploaded photos enter the app as `src/assets/<name>.<ext>.asset.json` Lovable Asset pointers, not copied binaries, so the repository stays free of large media files.
- Photo frames use `object-contain` plus a blurred same-photo backdrop rather than a fixed-height `object-cover` crop, because the user requires every photo to be shown whole.
<!-- LOVABLE:END-PROJECT-RULES -->
