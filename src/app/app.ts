import { Component } from '@angular/core';
import { AppSidebar } from './sidebar-inset/app-sidebar';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [AppSidebar, HlmSidebarImports, RouterOutlet],
  selector: 'app-root',
  template: `<app-sidebar>
    <main hlmSidebarInset>
      <header class="flex h-12 items-center justify-between px-4">
        <button hlmSidebarTrigger><span class="sr-only"></span></button>
        <router-outlet />
      </header>
    </main>
    ng
  </app-sidebar>`,
})
export class App {}
