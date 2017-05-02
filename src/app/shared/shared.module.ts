import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { PostProcessPipe } from './pipes/post-process.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [MarkdownViewerComponent, MarkdownPipe, HighlightPipe, PostProcessPipe],
  exports: [MarkdownViewerComponent, MarkdownPipe, HighlightPipe, PostProcessPipe],
})
export class SharedModule {
}
